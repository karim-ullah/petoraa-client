import { ListUl } from "@gravity-ui/icons";

export default function NoRequestsCard() {
  return (
    <div className="max-w-lg mx-auto flex flex-col items-center justify-center text-center">
      {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-warning-50 flex items-center justify-center mb-5">
          <ListUl
            width={40}
            height={40}
            className="text-warning"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">
          No Requests Yet
        </h2>

        {/* Description */}
        <p className="text-default-500 max-w-sm mb-6">
          This pet hasn't received any adoption requests yet.
          Once someone submits a request, it will appear here.
        </p>
    </div>
  );
}