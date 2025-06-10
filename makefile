check:
	npx prettier . --check

write:
	npx prettier . --write

style:
	npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

status:
	git status

push:
	git push origin master

add:
	git add .

push:
	git push origin master