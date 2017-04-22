default: repl

build:
	idris -p idrisscript -p dom -p html -p console -p webgl -i src \
	    --codegen javascript src/Main.idr -o app.js

install:
	cd lib/idris-dom;                        \
	  cd lib/idris-html;                     \
	    cd lib/idris-hrTime;                 \
	      idris --install hrTime.ipkg;       \
	    cd -;                                \
	    cd lib/IdrisScript;                  \
	      idris --install idrisscript.ipkg;  \
	    cd -;                                \
	    cd lib/idris-webgl;                  \
	      idris --install webgl.ipkg;        \
	    cd -;                                \
	    idris --install html.ipkg;           \
	  cd ../..;                              \
	  idris --install dom.ipkg;              \
	cd ../..;                                \
	cd lib/idris-console;                    \
	  idris --install console.ipkg;          \
	cd -

repl:
	idris -p idrisscript -p dom -p html -p console -p webgl -i src

run:
	make build && make server

server:
	python -m SimpleHTTPServer 8000

