import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getCarById } from "../../../services/api";

type Props = {
    params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["car", id],
        queryFn: () => getCarById(id),
    });
    

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
        </HydrationBoundary>
    );
};

export default CarDetails;