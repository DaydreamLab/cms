let abs = require("path").resolve;
let fs = require("fs-extra");
let alert = require("./alert");

const project = abs(__dirname, "../");
// Load configuration
const config = fs.readJsonSync("./scripts/config.json");

let updatePublicDir = callback => {
  //Empty public directory
  fs.emptyDirSync(abs(project, config.targetPublicDirPath));

  //Copy files from source directory
  fs.copy(
    abs(project, config.sourceDirPath),
    abs(project, config.targetPublicDirPath),
    {
      filter: src => src !== `${abs(project, config.sourceDirPath)}/img`
    },
    err => {
      if (err) return alert(err);
      callback();
    }
  );
};

let updateIndexFile = callback => {
  //Empty resources admin directory
  fs.emptyDirSync(abs(project, config.targetViewPath));

  //Copy files from source directory
  fs.copy(
    abs(project, config.sourceViewPath),
    abs(project, config.targetViewPath),
    err => {
      if (err) return alert(err);
      callback();
    }
  );
};

// Run scripts
alert("Start update frontend assets...");
updatePublicDir(() => {
  updateIndexFile(() => {
    alert("Updating frontend assets is completed!");
  });
});
