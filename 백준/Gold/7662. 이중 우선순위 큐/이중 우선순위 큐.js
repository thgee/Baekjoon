const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let idx = 1;
let answer = [];
let map;
let heap, _heap;

const insert = (val) => {
    heap.push(val);
    _heap.push(val);
    let idx = heap.length - 1;
    let _idx = _heap.length - 1;

    while(idx > 0) {
        let parentIdx = (idx - 1) >> 1;
        if (heap[parentIdx] <= val) break;
        heap[idx] = heap[parentIdx];
        idx = parentIdx;
    }
    heap[idx] = val;

    while(_idx > 0) {
        let parentIdx = (_idx - 1) >> 1;
        if (_heap[parentIdx] >= val) break;
        _heap[_idx] = _heap[parentIdx];
        _idx = parentIdx;
    }
    _heap[_idx] = val;
}

const remove = (sign) => {
    if (sign == -1) {
        if (!heap.length) return undefined;
        if (heap.length == 1) return heap.pop();
        const res = heap[0];
        const val = heap.pop();
        let idx = 0;
        let len = heap.length >> 1;
    
        while(idx < len) {
            let left = (idx << 1) + 1;
            let right = left + 1;
            let pos = left;
    
            if (right < heap.length && heap[right] < heap[left]) pos = right;
            if (heap[pos] >= val) break;
            heap[idx] = heap[pos];
            idx = pos;
        }
    
        heap[idx] = val;
        return res;
    } else {
        if (!_heap.length) return undefined;
        if (_heap.length == 1) return _heap.pop();
        const res = _heap[0];
        const val = _heap.pop();
        let idx = 0;
        let len = _heap.length >> 1;
    
        while(idx < len) {
            let left = (idx << 1) + 1;
            let right = left + 1;
            let pos = left;
    
            if (right < _heap.length && _heap[right] > _heap[left]) pos = right;
            if (_heap[pos] <= val) break;
            _heap[idx] = _heap[pos];
            idx = pos;
        }
    
        _heap[idx] = val;
        return res;
    }
}

while(n) {
    let temp = +input[idx++];
    heap = [], _heap = [];
    map = new Map();
    for (let i = 0; i < temp; i++) {
        let [cmd, x] = input[idx+i].trim().split(' ');
        x = parseInt(x);
        if (cmd == 'I') {
            insert(x);
            map.set(x, (map.get(x) || 0) + 1);
        }
        else {
            while(true) {
                let data = remove(x);
                if (data == undefined || map.get(data) != 0) {
                    if (data != undefined) map.set(data, map.get(data) - 1);
                    break;
                }
            }
        }
    }

    let flag = false;
    while(heap.length || _heap.length) {
        let min = heap[0] || undefined;
        let max = _heap[0] || undefined;
        if (!map.get(min) && !map.get(max)) {
            remove(1);
            remove(-1);
        }
        else {
            if (!map.get(min)) {
                while(heap.length) {
                    min = remove(-1);
                    if (map.get(min)) break; 
                }
                if (!map.get(min)) min = max
                answer.push(max + ' ' + min);
            }
            else if (!map.get(max)) {
                while(_heap.length) {
                    max = remove(1);
                    if (map.get(max)) break;
                }
                if (!map.get(max)) max = min;
                answer.push(max + ' ' + min);
            }
            else answer.push(max + ' ' + min);
            flag = true;
            break;
        }
    }
    if (!flag) answer.push('EMPTY');
    idx += temp;
    n--;
}

console.log(answer.join('\n'));