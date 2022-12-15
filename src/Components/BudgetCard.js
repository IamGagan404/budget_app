import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormattor } from "../utils";
export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  Buttonhide,
  onAddExpenseClick,
  onViewExpensesClick,
}) {
  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="mb-2">{name}</div>
          <div className="d-flex justify-content-between">
            {currencyFormattor.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                {" "}
                / {currencyFormattor.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVareint(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {!Buttonhide && (
          <Stack direction="horizontal" gap={2} className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button onClick={onViewExpensesClick} variant="outline-secondary">
              View Expense
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
}

function getProgressBarVareint(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  else return "danger";
}
