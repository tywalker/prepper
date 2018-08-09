defmodule PalindromeTest do
  use ExUnit.Case
  doctest Palindrome

  test "should return true or false for palindrom" do
    assert Palindrome.is_palindrome?("hello") == false
    assert Palindrome.is_palindrome?("hannah") == true
    assert Palindrome.is_palindrome?("poop") == true
    assert Palindrome.is_palindrome?(" hannah ") == true
  end

  test "should return whether an integer is palindromic" do
    assert Palindrome.is_palindrome?(Integer.to_string(11234)) == false
    assert Palindrome.is_palindrome?(Integer.to_string(1123211)) == true
  end
end
