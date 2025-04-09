/** @format */

import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isPending } = useCreateMyRestaurant();
  return (
    <div>
      <ManageRestaurantForm onSave={createRestaurant} isPending={isPending} />
    </div>
  );
};

export default ManageRestaurantPage;
