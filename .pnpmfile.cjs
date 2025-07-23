// .pnpmfile.cjs
module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === 'sharp') {
        pkg.scripts = pkg.scripts || {};
        // 允许 sharp 的安装脚本执行
        pkg.scripts.install = pkg.scripts.install || 'node install/libvips.js';
      }
      return pkg;
    },
  },
};
