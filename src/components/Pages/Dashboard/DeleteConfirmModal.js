import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingOrder, refetch, setDeletingOrder}) => {
    const {productName, user} = deletingOrder;
    console.log(user);
    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${user}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order: ${productName} is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
        <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete  ${productName}!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div class="modal-action">
                <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                    <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                </div>
            </div>
        </div>

    </div >
    );
};

export default DeleteConfirmModal;