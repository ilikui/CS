SHELL := cmd.exe
.SHELLFLAGS := /C

CC := gcc
CPPFLAGS ?=
CFLAGS ?= -std=c11 -Wall -Wextra -g
LDFLAGS ?=
LDLIBS ?=

SOURCES := $(wildcard *.c)
TARGETS := $(SOURCES:.c=.exe)
DEPS := $(SOURCES:.c=.d)
ASM_TARGETS := $(SOURCES:.c=.s)
ASM_DEPS := $(SOURCES:.c=.asm.d)
PREPROCESS_TARGETS := $(SOURCES:.c=.i)
OBJECTS := $(SOURCES:.c=.o)
INTERMEDIATE_DEPS := $(SOURCES:.c=.pp.d) $(SOURCES:.c=.obj.d)
PROGRAM ?= array

.PHONY: all asm inter run clean help
.DELETE_ON_ERROR:

all: $(TARGETS)

%.exe: %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) -MMD -MP -MF $*.d $(LDFLAGS) -o $@ $< $(LDLIBS)

asm: $(ASM_TARGETS)

%.s: %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) -S -MMD -MP -MF $*.asm.d -MT $@ -o $@ $<

inter: $(PREPROCESS_TARGETS) $(ASM_TARGETS) $(OBJECTS)

%.i: %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) -E -MMD -MP -MF $*.pp.d -MT $@ -o $@ $<

%.o: %.c
	$(CC) $(CPPFLAGS) $(CFLAGS) -c -MMD -MP -MF $*.obj.d -MT $@ -o $@ $<

# Select another example with: make run PROGRAM=example
run: $(PROGRAM).exe
	.\$(PROGRAM).exe

clean:
	$(foreach file,$(wildcard *.o *.exe *.d) $(ASM_TARGETS) $(PREPROCESS_TARGETS),if exist "$(file)" (del /Q "$(file)" || exit /B 1) & ) rem

help:
	@echo make                     Build one executable per C source.
	@echo make asm                 Generate a .s assembly file per C source.
	@echo make inter               Generate .i, .s and .o files per C source.
	@echo make run                 Build and run iteration.exe.
	@echo make run PROGRAM=name    Build and run name.exe.
	@echo make clean               Remove .o, .exe, .d and generated .i, .s files.

-include $(DEPS) $(ASM_DEPS) $(INTERMEDIATE_DEPS)