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
    if is_integer(str) do
      convert_string = Integer.to_string(str)
    end
    split_string(convert_string || string)
    |> iter_string("")
  end
end
