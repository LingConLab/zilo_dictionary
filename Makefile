.DEFAULT_GOAL: compile

compile:
	quarto render --profile english; quarto render --profile russian
