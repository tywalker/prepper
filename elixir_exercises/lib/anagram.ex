defmodule Anagram do
  def is_anagram?(x, y) do
    Enum.sort(String.to_charlist(x)) == Enum.sort(String.to_charlist(y))
  end
end
