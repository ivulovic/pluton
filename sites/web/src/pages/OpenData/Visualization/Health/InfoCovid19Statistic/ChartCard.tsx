import { PropsWithChildren } from "react";

const ChartCard = (props: PropsWithChildren<{ title: string; value?: number; change?: { value: number; description: string } }>) => {
  const { children, title, value, change } = props;
  return (
    <div className="chart-card">
      <h2 className="title">{title}</h2>
      <div className="value-row">
        <h2 className="number value">{value}</h2>
        {change && (
          <p className="change">
            <span className={`value number ${change.value < 0 ? "negative" : change.value === 0 ? "neutral" : "positive"}`}>{change.value}%</span>
            <span className="description">{change.description}</span>
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default ChartCard;
