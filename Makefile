install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js


prettier:
	npx prettier --write .

lint:
	npx eslint . 

publish:
	npm publish --dry-run . 