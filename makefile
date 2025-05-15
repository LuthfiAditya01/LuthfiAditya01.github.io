check:
	npx prettier . --check

write:
	npx prettier . --write

style:
	npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

push:
	git push origin master

add:
	git add .

