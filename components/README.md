# Component Guide

## This is a quick guide to the components and their inputs. I thought it might be easier to have a searchable document with each one and their inputs.

### CategoryContainer
- **category**
 - coffee
 - food
 - groceries
 - shopping

- *size*
 - s
 - m

 ### GraphicContainer
- **graphic**
  - apple
  - banana
  - blackberry
  - blueberry
  - cherry
  - eggplant
  - grape
  - lemon
  - mango
  - onion
  - orange
  - peach
  - pear
  - pineapple
  - pumpkin
  - strawberry
  - tomato
  - usedApple

### HorizontalProgressBar
Auto animates when the progress value changes.
Additional colours can be added into barColor (must be rgba values, a fourth digit can be added for border thickness)
- **progress**
  - A number between 0 and 1. 
  - Format: {0.5}
- **color**
  - red
  - gray

  ### BudgetBottomSheet
- **size**
  - m
  - l
- **children**
  - The content to be displayed within the BudgetBottomSheet
  - Anything wrapped in ```<BudgetBottomSheet></BudgetBottomSheet>``` will display within it.
