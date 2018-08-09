defmodule RS do
  def split_string(str) do
    String.split(str, "")
  end

  def iter_string([head | tail], acc) do
    iter_string(tail, "#{head}#{acc}")
  end

  def iter_string([], acc) do
    acc
  end

  def reverse_string(str) do
    string = if is_integer(str) do
      Integer.to_string(str)
    else
      str
    end

    split_string(string)
    |> iter_string("")
  end
end
