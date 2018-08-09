defmodule Palindrome do
  import RS

  def is_palindrome?(str) do
    reverse_string(str) == str
  end
end
