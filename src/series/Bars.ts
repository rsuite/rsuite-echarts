import 'echarts/lib/chart/bar';
import { symbols } from '../constants';

type BarsProps = Omit<echarts.EChartOption.SeriesBar, 'stack'> & {
  color?: string | string[];
  stack?: string | true;
};

function Bars(_: BarsProps) {
  return null;
}

Bars[symbols.typeKey] = symbols.bars;

if (process.env.NODE_ENV !== 'production') {
  Bars.displayName = 'Bars';
}

export default Bars;
