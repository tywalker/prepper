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
    cond do
      is_integer(str) ->
        int_string = Integer.to_string(str)
        split_concat(int_string)
      is_bitstring(str) ->
        string = str
        split_concat(string)
      true ->
        "No string given."
    end
  end

  def split_concat(str) do
    split_string(str)
    |> iter_string("")
  end
end
