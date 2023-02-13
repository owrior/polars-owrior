window.SIDEBAR_ITEMS = {"fn":[["convert","Turns a normal, non-streaming iterator into a streaming iterator."],["convert_mut","Turns an iterator of mutable references into a streaming iterator."],["convert_ref","Turns an iterator of references into a streaming iterator."],["empty","Creates an empty iterator."],["from_fn","Creates an iterator that returns items from a function call."],["once","Creates an iterator that returns exactly one item."],["once_with","Creates an iterator that returns exactly one item from a function call."],["repeat","Creates an iterator that returns an item endlessly."],["repeat_with","Creates an iterator that endlessly returns items from a function call."],["successors","Creates an iterator where each successive item is computed from the preceding one."],["windows_mut","Creates an iterator over all contiguous windows of length `size` in a mutable `slice`."]],"struct":[["Chain","A streaming iterator that concatenates two streaming iterators"],["Cloned","A normal, non-streaming, iterator which converts the elements of a streaming iterator into owned values by cloning them."],["Convert","A streaming iterator which yields elements from a normal, non-streaming, iterator."],["ConvertMut","A streaming iterator which yields elements from an iterator of mutable references."],["ConvertRef","A streaming iterator which yields elements from an iterator of references."],["Copied","A normal, non-streaming, iterator which converts the elements of a streaming iterator into owned values by copying them."],["Empty","A simple iterator that returns nothing."],["Filter","A streaming iterator which filters the elements of a streaming iterator with a predicate."],["FilterMap","An iterator which both filters and maps elements of a streaming iterator with a closure."],["FilterMapDeref","A regular, non-streaming iterator which both filters and maps elements of a streaming iterator with a closure."],["FlatMap","A streaming iterator that maps elements to iterators with a closure and then yields the concatenation of the obtained iterators"],["Flatten","A streaming iterator that flattens nested streaming iterators."],["FromFn","A simple iterator that returns items from a function call."],["Fuse","A streaming iterator which is well-defined before and after iteration."],["Inspect","A streaming iterator that calls a function with element before yielding it."],["Map","A streaming iterator which transforms the elements of a streaming iterator."],["MapDeref","A regular, non-streaming iterator which transforms the elements of a streaming iterator."],["MapDerefMut","A regular, non-streaming iterator which transforms the elements of a mutable streaming iterator."],["MapRef","A streaming iterator which transforms the elements of a streaming iterator."],["Once","A simple iterator that returns exactly one item."],["OnceWith","A simple iterator that returns exactly one item from a function call."],["Repeat","A simple iterator that repeats an item endlessly."],["RepeatWith","A simple iterator that endlessly returns items from a function call."],["Rev","A streaming iterator which returns elements in the opposite order."],["Skip","A streaming iterator which skips a number of elements in a streaming iterator."],["SkipWhile","A streaming iterator which skips initial elements that match a predicate"],["Successors","An iterator where each successive item is computed from the preceding one."],["Take","A streaming iterator which only yields a limited number of elements in a streaming iterator."],["TakeWhile","A streaming iterator which only returns initial elements matching a predicate."],["WindowsMut","A streaming iterator which returns overlapping mutable subslices of length `size`."]],"trait":[["DoubleEndedStreamingIterator","A streaming iterator able to yield elements from both ends."],["DoubleEndedStreamingIteratorMut","A mutable streaming iterator able to yield elements from both ends."],["IntoStreamingIterator","Conversion from [`IntoIterator`] to [`StreamingIterator`]."],["StreamingIterator","An interface for dealing with streaming iterators."],["StreamingIteratorMut","An interface for dealing with mutable streaming iterators."]]};