import {
  conf,
  language,
} from 'monaco-editor/esm/vs/basic-languages/pgsql/pgsql';

language.builtinFunctions.push(
  ...[
    // Hypertable & chunks
    'create_hypertable',
    'show_chunks',
    'drop_chunks',
    'reorder_chunks',
    'move_chunk',
    'add_reorder_policy',
    'remove_reorder_policy',
    'attach_tablespace',
    'detach_tablespace',
    'detach_tablespaces',
    'show_tablespaces',
    'set_chunk_time_interval',
    'set_integer_now_func',
    'add_dimension',
    'create_index',
    'hypertable_size',
    'hypertable_approximate_size',
    'hypertable_detailed_size',
    'hypertable_approximate_detailed_size',
    'hypertable_index_size',
    'chunks_detailed_size',
    'by_range',
    'by_hash',
    // Distributed hypertables
    'create_distributed_hypertable',
    'add_data_node',
    'attach_data_node',
    'alter_data_node',
    'detach_data_node',
    'delete_data_node',
    'distributed_exec',
    'set_number_partitions',
    'set_replication_factor',
    // 'copy_chunk', - experimental
    // 'move_chunk', - experimental
    // 'cleanup_copy_chunk_operation', - experimental
    // 'create_distributed_restore_point', - experimental
    // Compression
    'add_compression_policy',
    'remove_compression_policy',
    'compress_chunk',
    'decompress_chunk',
    'recompress_chunk',
    'hypertable_compression_stats',
    'chunk_compression_stats',
    // Continuous aggregates
    'refresh_continuous_aggregate',
    'add_continuous_aggregate_policy',
    // 'add_policies', - experimental
    // 'alter_policies', - experimental
    // 'show_policies', - experimental
    'remove_continuous_aggregate_policy',
    'cagg_migrate',
    // 'remove_policies', - experimental
    // 'remove_all_policies', - experimental
    'hypertable_size',
    'hypertable_detailed_size',
    // Data retention
    'add_retention_policy',
    'remove_retention_policy',
    // Actions and automation
    'add_job',
    'alter_job',
    'delete_job',
    'run_job',
    // Hyperfunctions
    'approximate_row_count',
    'first',
    'last',
    'histogram',
    'time_bucket',
    'days_in_month',
    'month_normalize',
    // Hyperfunctions - Approximate count distinct
    'hyperloglog',
    'approx_count_distinct',
    'distinct_count',
    'stderror',
    'rollup',
    // Hyperfunctions - Saturating math
    // 'saturating_add', - experimental
    // 'saturating_add_pos', - experimental
    // 'saturating_mul', - experimental
    // 'saturating_sub', - experimental
    // 'saturating_sub_pos', - experimental
    // Hyperfunctions - Statistical and regression analysis
    //   One variable
    'stats_agg',
    'average',
    'kurtosis',
    'num_vals',
    'skewness',
    'stddev',
    'sum',
    'variance',
    'rolling',
    'rollup',
    //   Two variables
    // 'stats_agg', - duplicated above
    'average_y',
    'average_x',
    'corr',
    'covariance',
    'determination_coeff',
    'intercept',
    'kurtosis_y',
    'kurtosis_x',
    'num_vals',
    'skewness_y',
    'skewness_x',
    'slope',
    'stddev_y',
    'stddev_x',
    'sum_y',
    'sum_x',
    'variance_y',
    'variance_x',
    'x_intercept',
    // 'rolling', - duplicated above
    // 'rollup', - duplicated above
    // Hyperfunctions - Minimum and maximum
    'min_n',
    'max_n',
    'min_n_by',
    'max_n_by',
    'into_array',
    'into_values',
    // Hyperfunctions - Financial analysis
    'candlestick_agg',
    'candlestick',
    'close',
    'close_time',
    'high',
    'high_time',
    'low',
    'low_time',
    'open',
    'open_time',
    'volume',
    'vwap',
    // 'rollup', - duplicated above
    // Hyperfunctions - Gapfilling
    'time_bucket_gapfill',
    'interpolate',
    'locf',
    // Hyperfunctions - Percentile approximation
    //   percentile_agg and uddsketch
    'uddsketch',
    'percentile_agg',
    'approx_percentile',
    'approx_percentile_array',
    'approx_percentile_rank',
    'error',
    'mean',
    'num_vals',
    // 'rollup', - duplicated above
    //   tdigest
    'tdigest',
    // 'approx_percentile', - duplicated above
    // 'approx_percentile_rank', - duplicated above
    // 'mean', - duplicated above
    // 'num_vals', - duplicated above
    // 'rollup', - duplicated above
    // Hyperfunctions - Counters and guages
    //   counter_agg
    'counter_agg',
    'corr',
    'counter_zero_time',
    'delta',
    'extrapolated_delta',
    'extrapolated_rate',
    'first_time',
    'first_val',
    'idelta_left',
    'idelta_right',
    'intercept',
    // 'interpolated_delta', - experimental
    // 'interpolated_rate', - experimental
    'irate_left',
    'irate_right',
    'last_time',
    'last_val',
    'num_changes',
    'num_elements',
    'num_resets',
    'rate',
    'slope',
    'time_delta',
    // 'rollup', - duplicated above
    'with_bounds',
    //   guage_agg
    // 'guage_agg', - experimental
    // 'corr', - experimental
    // 'delta', - experimental
    // 'extrapolated_delta', - experimental
    // 'extrapolated_rate', - experimental
    // 'guage_zero_time', - experimental
    // 'idelta_left', - experimental
    // 'idelta_right', - experimental
    // 'intercept', - experimental
    // 'interpolated_delta', - experimental
    // 'interpolated_rate', - experimental
    // 'irate_left', - experimental
    // 'irate_right', - experimental
    // 'num_changes', - experimental
    // 'num_elements', - experimental
    // 'rate', - experimental
    // 'slope', - experimental
    // 'time_delta', - experimental
    // 'rollup', - experimental
    // 'with_bounds', - experimental
    // Hyperfunctions - Time-weighted calculations
    'time_weight',
    'average',
    'first_time',
    'first_val',
    'integral',
    'interpolated_average',
    'interpolated_integral',
    'last_time',
    'last_val',
    // 'rollup', - duplicated above
    // Hyperfunctions - Downsampling
    'asap_smooth',
    // 'gp_lttb', - experimental
    'lttb',
    // Hyperfunctions - Frequency analysis
    //   freq_agg
    // 'freq_agg', - experimental
    'mcv_agg',
    'into_values',
    'max_frequency',
    'min_frequency',
    'topn',
    // 'rollup', - duplicated above
    //   count_min_sketch
    // 'count_min_sketch', - experimental
    // 'approx_count', - experimental
    // Hyperfunctions - State tracking
    //   compact_state_agg
    // 'compact_state_agg', - experimental
    // 'duration_in', - experimental
    // 'interpolated_duration_in', - experimental
    // 'into_values', - experimental
    // 'rollup', - experimental
    //   state_agg
    'state_agg',
    'duration_in',
    'interpolated_duration_in',
    'interpolated_state_periods',
    'interpolated_state_timeline',
    'into_values',
    'state_at',
    'state_periods',
    'state_timeline',
    // 'rollup', - duplicated above
    //   heartbeat_agg
    'heartbeat_agg',
    'dead_ranges',
    'downtime',
    'interpolate',
    'interpolated_downtime',
    'interpolated_uptime',
    'live_at',
    'live_ranges',
    'num_gaps',
    'num_live_ranges',
    'trim_to',
    'uptime',
    // 'rollup', - duplicated above
    // Administration Functions
    'timescaledb_pre_restore',
    'timescaledb_post_restore',
    'get_telemetry_report',
  ],
);

// Re-sort the list of functions, and remove potential duplicates
language.builtinFunctions = (language.builtinFunctions as string[])
  .sort()
  .filter((x, i, a) => !i || x !== a[i - 1]);

export { conf, language };
