libmkchlog = require("libmkchlog")
fs = require("fs")
spawnSync = require("child_process").spawnSync;

config = fs.readFileSync(".mkchlog.yml", "utf8")

git_cb = function(args) {
	cmd_opts = {
		encoding: "utf8",
		stdio: ["ignore", "pipe", "inherit"]
	}
	result = spawnSync("git", args, cmd_opts)
	//console.log(result.stdout)
	return result.stdout
}
libmkchlog.check(config, git_cb)
