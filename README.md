# GitHub Action for mkchlog

This makes it easy to setup a GitHub action for your project to check that your commits conform to [`mkchlog`](https://github.com/crywolf/mkchlog) format.

Once configured and used you can run `mkchlog gen` to generate the changelog during release.

This is currently proof of concept so there are no inputs. The action will automatically use `.mkchlog.yml` from your repository as well as your git messages.

Note: this action is written using Wasm with tiny JavaScript bridge, so it should be platform-independent.
