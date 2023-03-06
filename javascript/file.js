const fs = require('fs');
const path = require('path');
const dir = './tmp';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const files = Array.from({
    length: 100
}).fill('fileName.txt')


async function main2() {
    console.time('starting');
    const promiseWriteFiles = files.map(() => {
        const filePath = path.join(dir, "" + Math.random() * 10);
        if (fs.existsSync(filePath)) {
            return;
        }
        return fs.promises.writeFile(filePath, "Hello world!");
    })

    await Promise.all(promiseWriteFiles)
    console.timeEnd('starting')
}



async function main() {
    console.time('starting2');
    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(dir, files[i] + Math.random() * 10);
        await fs.promises.writeFile(filePath, "Hello world!");
    }
    console.timeEnd('starting2');
}


// main2()
main().then((res) => {
    console.log('res',res);
}).catch((err) => {
    console.log("🚀 ~ file: file.js:45 ~ err:", err)
})

