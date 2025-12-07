# _plugins/number_filters.rb
module Jekyll
  module NumberFilters
    # Formats a number to 2 decimal places
    def two_decimal(input)
      "%.2f" % input.to_f
    end
  end
end

Liquid::Template.register_filter(Jekyll::NumberFilters)
