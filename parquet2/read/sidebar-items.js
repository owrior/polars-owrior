window.SIDEBAR_ITEMS = {"enum":[["State","State of [`MutStreamingIterator`]."]],"fn":[["decompress","Decompresses the page, using `buffer` for decompression. If `page.buffer.len() == 0`, there was no decompression and the buffer was moved. Else, decompression took place."],["deserialize_metadata","Parse loaded metadata bytes"],["filter_row_groups","Filters row group metadata to only those row groups, for which the predicate function returns true"],["get_column_iterator","Returns a [`ColumnIterator`] of column chunks corresponding to `field`."],["get_field_columns","Returns all [`ColumnChunkMetaData`] associated to `field_name`. For non-nested types, this returns an iterator with a single column"],["get_page_iterator","Returns a new [`PageReader`] by seeking `reader` to the begining of `column_chunk`."],["get_page_stream","Returns a stream of compressed data pages"],["get_page_stream_from_column_start","Returns a stream of compressed data pages from a reader that begins at the start of the column"],["read_column","Reads a column chunk into memory This operation is IO-bounded and allocates the column’s `compressed_size`."],["read_column_async","Reads a single column chunk into memory asynchronously"],["read_columns","Reads all columns that are part of the parquet field `field_name`"],["read_columns_async","Reads all columns that are part of the parquet field `field_name`"],["read_columns_indexes","Reads the column indexes of all [`ColumnChunkMetaData`] and deserializes them into [`Index`]. Returns an empty vector if indexes are not available"],["read_metadata","Reads a [`FileMetaData`] from the reader, located at the end of the file."],["read_metadata_async","Asynchronously reads the files’ metadata"],["read_pages_locations","Read [`PageLocation`]s from the [`ColumnChunkMetaData`]s. Returns an empty vector if indexes are not available"]],"mod":[["levels",""]],"struct":[["BasicDecompressor","A [`FallibleStreamingIterator`] that decompresses [`CompressedPage`] into [`DataPage`]."],["ColumnIterator","A [`MutStreamingIterator`] that reads column chunks one by one, returning a [`PageReader`] per column."],["Decompressor","Decompressor that allows re-using the page buffer of [`PageIterator`]."],["IndexedPageReader","A fallible [`Iterator`] of [`CompressedPage`]. This iterator leverages page indexes to skip pages that are not needed. Consequently, the pages from this iterator always have [`Some`] [`crate::page::CompressedDataPage::selected_rows()`]"],["PageMetaData","This meta is a small part of [`ColumnChunkMetaData`]."],["PageReader","A fallible [`Iterator`] of [`CompressedDataPage`]. This iterator reads pages back to back until all pages have been consumed. The pages from this iterator always have [`None`] [`crate::page::CompressedDataPage::selected_rows()`] since filter pushdown is not supported without a pre-computed page index."],["ReadColumnIterator","A [`MutStreamingIterator`] of pre-read column chunks"]],"trait":[["MutStreamingIterator","A special kind of fallible streaming iterator where `advance` consumes the iterator."],["PageIterator",""]],"type":[["PageFilter","Type declaration for a page filter"]]};