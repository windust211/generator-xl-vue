// 此文件做为generator的核心入口
// 到处一个继承自yeoman generator的类型
const Generator = require('yeoman-generator');
const fs = require('fs');
module.exports = class extends Generator {
  //  命令行交互
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'your project name',
        default: this.appname,
      },
    ]).then((answer) => {
      this.answer = answer;
    });
  }
  // 批量生成
  writing() {
    //   把template里面的东西，写入当前的项目，把可能发现变化的地方，通过模版引擎进行挖坑
    const files = ['index.html','README.md', 'package.json'];
    files.forEach((item) => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answer
      );
    });
  }
};
