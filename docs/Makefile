OPTS := --pdf-engine=lualatex \
	-V documentclass=ltjsarticle -V indent=true \
	-N -F pandoc-crossref -B before.tex

.PHONY: all clean

all: $(patsubst %.md,%.pdf,$(wildcard */doc.md))

clean:
	rm -f */doc.pdf

%.pdf: %.md
	pandoc $(OPTS) -f markdown -o $@ $<
