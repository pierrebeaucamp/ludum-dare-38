default: repl

repl:
	idris -p idrisscript src/main.idr

setup:
	cd lib/idrisscript;               \
	idris --install idrisscript.ipkg; \
	cd -

server:
	python -m SimpleHTTPServer 8000

