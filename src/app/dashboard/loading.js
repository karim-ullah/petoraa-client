import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-2">
        <Spinner color="success" />
        <span className="text-xs text-muted">Loading....</span>
      </div>
    );
};

export default Loading;