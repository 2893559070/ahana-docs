import fs from 'node:fs'
const siderAll = {}
const sider = {
    key: '',
    title: '',
    path: '',
}
function readDirSync({
    dirPath,
    fileType,
    splitStr
}, root = true) {
    const dirAll =  fs.readdirSync(dirPath)
    dirAll.forEach((dir, index) => {
        var info = fs.statSync(`${dirPath}/${dir}`)
        const dirArr = dirPath.split(`\\${splitStr}`);            
        const filePath = dirArr[dirArr.length - 1].replace(/\\/g, '/');
        if(root) sider.key = filePath.split('/')[1] + '/' + dir
        if(root) sider.title = dir
        if(info.isDirectory()) {
            const newPath = dirPath + '\\' + dir;
            if(root) sider.path = dir
            return readDirSync({
                dirPath: newPath,
                fileType,
                splitStr
            }, false)
        }else {
            if(dir.includes(fileType)) {
                const dirArr = dirPath.split(`\\${splitStr}`);            
                const filePath = dirArr[dirArr.length - 1].replace(/\\/g, '/');
                sider.path = `${filePath}/${dir}`;
                if(!siderAll[`/${sider.key}/`]) siderAll[`/${sider.key}/`] = [{
                    text: sider.title[0].toLocaleUpperCase() + sider.title.substring(1),
                    children: []
                }];
                siderAll[`/${sider.key}/`][0].children.push(sider.path);
            }
        }
    })

    return siderAll;
}

module.exports = (pathStr = './', fileType = '.md', splitStr = '') => {
    return readDirSync({
        dirPath: pathStr,
        fileType,
        splitStr
    })
}
