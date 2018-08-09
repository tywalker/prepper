defmodule Palindrome do
  import RS

  def is_palindrome?(str) do
    reversed = RS.reverse_string(str)
    reversed == str
  end

end
