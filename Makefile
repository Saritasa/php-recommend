all: install static run

install:
	npm install

static:
	npm run build

run:
	docker-compose -p phpr up

stop:
	docker-compose -p phpr kill

shell:
	docker-compose -p phpr exec web sh
