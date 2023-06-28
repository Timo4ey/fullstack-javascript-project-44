install:
	npm ci

brain-games:
	node bin/brain-games.js

prettier:
	npx prettier --write .

lint:
	npx eslint . 