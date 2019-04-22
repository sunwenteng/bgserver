import {LinkedList} from "./linked_list";

const BRANCH_NUM_MAX = 256;

class Node {
    depth: number = 0;
    next: { [char: number]: Node } = {};
    fail: Node = null;
}

export class StringChecker {
    root: Node = new Node();

    addPattern(pattern: string) {
        let buffer = new Buffer(pattern);
        let depth = 0;
        let node = this.root;
        for (let i = 0; i < buffer.length; i++) {
            ++depth;

            let k = buffer[i];
            if (k >= 'A'.charCodeAt(0) && k <= 'Z'.charCodeAt(0)) {
                k = k - 'A'.charCodeAt(0) + 'a'.charCodeAt(0);
            }

            if (!node.next[k]) {
                node.next[k] = new Node();
            }
            node = node.next[k];
        }
        node.depth = depth;
    }

    build() {
        let q: LinkedList<Node> = new LinkedList<Node>();
        this.root.fail = null;
        q.append(this.root);

        while (q.length > 0) {
            let node = q.head;
            q.deleteNode(node);
            for (let i = 0; i < BRANCH_NUM_MAX; i++) {
                if (!node.element.next[i]) {
                    continue;
                }
                let p = node.element.fail;
                while (p) {
                    if (p.next[i]) {
                        node.element.next[i].fail = p.next[i];
                        break;
                    }
                    p = p.fail;
                }
                if (p === null) {
                    node.element.next[i].fail = this.root;
                }
                q.append(node.element.next[i]);
            }
        }
    }

    replace(src: string): string {
        let buffer = new Buffer(src);
        let tmp = '';
        let node = this.root;
        let st = 0;
        let ed = 0;

        while (ed !== buffer.length) {
            let k = buffer[ed];
            if (k >= 'A'.charCodeAt(0) && k <= 'Z'.charCodeAt(0)) {
                k = k - 'A'.charCodeAt(0) + 'a'.charCodeAt(0);
            }

            while (!node.next[k] && node !== this.root) {
                node = node.fail;
            }

            if (node.next[k]) {
                node = node.next[k];
            }

            if (node !== this.root && node.depth) {
                let data = new Buffer(ed - node.depth + 1 - st);
                buffer.copy(data, 0, st, ed - node.depth + 1);
                tmp += data.toString();
                tmp += '***';
                node = this.root;
                st = ed + 1;
            }
            ++ed;
        }

        if (st !== src.length) {
            let data = new Buffer(ed - st);
            buffer.copy(data, 0, st, ed);
            tmp += data.toString();
        }

        return tmp;
    }

    reset() {
        this.root = new Node();
    }
}