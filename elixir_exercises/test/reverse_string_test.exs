defmodule RSTest do
  use ExUnit.Case
  doctest RS

  test "should reverse a given string" do
    assert RS.reverse_string("heLLo") == "oLLeh"
    assert RS.reverse_string("hello") == "olleh"
    assert RS.reverse_string("argonaut") == "tuanogra"
    assert RS.reverse_string(" well this is neat ") == " taen si siht llew "
  end

  test "should return 'No string given if no argument'" do
    assert RS.reverse_string("")  == "No string given."
  end

  test "should reverse numbers" do
    assert RS.reverse_string(12345) == "54321"
  end

end
