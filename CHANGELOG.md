# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.1"></a>
## [2.0.1](https://github.com/webpack-contrib/eslint-config-webpack/compare/v2.0.0...v2.0.1) (2017-12-14)


### Chore

* Scopes package under contrib npm org ([d589b67](https://github.com/webpack-contrib/eslint-config-webpack/commit/d589b67))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.2.5...v2.0.0) (2017-12-14)


### Bug Fixes

* **style issues:** Typo in `new parens` rule ([7b7c012](https://github.com/webpack-contrib/eslint-config-webpack/commit/7b7c012))


### Code Refactoring

* **best practices:** Update rules for Prettier integration ([385aac8](https://github.com/webpack-contrib/eslint-config-webpack/commit/385aac8))
* **es6:** Update rules for Prettier integration ([2798140](https://github.com/webpack-contrib/eslint-config-webpack/commit/2798140))
* **possible errors:** Update rules for Prettier integration ([c95baae](https://github.com/webpack-contrib/eslint-config-webpack/commit/c95baae))
* **style issues:** Update rules for Prettier integration ([4018072](https://github.com/webpack-contrib/eslint-config-webpack/commit/4018072))


### BREAKING CHANGES

* **style issues:** Requires min eslint version of 4.x.
* **style issues:** Multiple rules disabled and handled by Prettier, this will change code style for defaults based projects.

Upgrade: After upgrading with defaults, any editor Prettier plugin can be used to update style. The pre-commit hook will also fix & write the prettier changes.
* **possible errors:** Requires min eslint version of 4.x.
* **possible errors:** Multiple rules disabled and handled by Prettier, this will change code style for defaults based projects.

Upgrade: After upgrading with defaults, any editor Prettier plugin can be used to update style. The pre-commit hook will also fix & write the prettier changes.
* **es6:** Requires min eslint version of 4.x.
* **es6:** Multiple rules disabled and handled by Prettier, this will change code style for defaults based projects.

Upgrade: After upgrading with defaults, any editor Prettier plugin can be used to update style. The pre-commit hook will also fix & write the prettier changes.
* **best practices:** Requires min eslint version of 4.x.
* **best practices:** Multiple rules disabled and handled by Prettier, this will change code style for defaults based projects.

Upgrade: After upgrading with defaults, any editor Prettier plugin can be used to update style. The pre-commit hook will also fix & write the prettier changes.



<a name="1.2.5"></a>
## [1.2.5](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.2.4...v1.2.5) (2017-06-12)


### Bug Fixes

* peerDep range ([3200392](https://github.com/webpack-contrib/eslint-config-webpack/commit/3200392))



<a name="1.2.4"></a>
## [1.2.4](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.2.3...v1.2.4) (2017-06-12)


### Bug Fixes

* Allow eslint 4.x via peerDep ([74b078b](https://github.com/webpack-contrib/eslint-config-webpack/commit/74b078b))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.2.2...v1.2.3) (2017-05-08)


### Bug Fixes

* **underscore-dangle:** added exception for __dirname ([#9](https://github.com/webpack-contrib/eslint-config-webpack/issues/9)) ([213c417](https://github.com/webpack-contrib/eslint-config-webpack/commit/213c417))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.2.1...v1.2.2) (2017-05-01)


### Bug Fixes

* allow dangle for private object members ([#8](https://github.com/webpack-contrib/eslint-config-webpack/issues/8)) ([a030c90](https://github.com/webpack-contrib/eslint-config-webpack/commit/a030c90))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.2.0...v1.2.1) (2017-03-29)


### Bug Fixes

* syntax error in stylistic rules ([3a0176f](https://github.com/webpack-contrib/eslint-config-webpack/commit/3a0176f))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.1.1...v1.2.0) (2017-03-29)


### Features

* **stylistic:** allow in for loop afterthought ([#6](https://github.com/webpack-contrib/eslint-config-webpack/issues/6)) ([efe3806](https://github.com/webpack-contrib/eslint-config-webpack/commit/efe3806))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.1.0...v1.1.1) (2017-03-16)


### Bug Fixes

* **variables:** Enable ignoreRestSiblings ([9d0b234](https://github.com/webpack-contrib/eslint-config-webpack/commit/9d0b234))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.0.0...v1.1.0) (2017-03-05)


### Features

* Rule updates for defaults ([#4](https://github.com/webpack-contrib/eslint-config-webpack/issues/4)) ([b522f26](https://github.com/webpack-contrib/eslint-config-webpack/commit/b522f26))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/webpack-contrib/eslint-config-webpack/compare/v1.0.0-alpha.1...v1.0.0) (2017-01-28)



<a name="1.0.0-alpha.1"></a>
# 1.0.0-alpha.1 (2017-01-28)


### Bug Fixes

* **es2015:** drop deprecated rule ([7ccaef6](https://github.com/webpack-contrib/eslint-config-webpack/commit/7ccaef6))
* **node:** add env mocha to node rules ([1fc3832](https://github.com/webpack-contrib/eslint-config-webpack/commit/1fc3832))
* **rules:** update remaining v2 syntax ([71e617a](https://github.com/webpack-contrib/eslint-config-webpack/commit/71e617a))
* **stylistic:** add missing comma-dangle rule ([e47d255](https://github.com/webpack-contrib/eslint-config-webpack/commit/e47d255))


### Features

* **rules:** add best practices rule set ([c4742c0](https://github.com/webpack-contrib/eslint-config-webpack/commit/c4742c0))
* **rules:** add entrypoint ([b921de4](https://github.com/webpack-contrib/eslint-config-webpack/commit/b921de4))
* **rules:** add es2015 rule set ([861edb8](https://github.com/webpack-contrib/eslint-config-webpack/commit/861edb8))
* **rules:** add imports rule set ([3e6eb77](https://github.com/webpack-contrib/eslint-config-webpack/commit/3e6eb77))
* **rules:** add node rule set ([2201d52](https://github.com/webpack-contrib/eslint-config-webpack/commit/2201d52))
* **rules:** add possible errors rule set ([08cde67](https://github.com/webpack-contrib/eslint-config-webpack/commit/08cde67))
* **rules:** add stylistic rule set ([bff21c7](https://github.com/webpack-contrib/eslint-config-webpack/commit/bff21c7))
* **rules:** add variables rule set ([daabb4f](https://github.com/webpack-contrib/eslint-config-webpack/commit/daabb4f))
