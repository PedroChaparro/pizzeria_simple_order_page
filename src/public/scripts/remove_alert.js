const btn_nodes_collection = document.querySelectorAll('.remove-btn');

if (btn_nodes_collection) {
    const btn_array = Array.from(btn_nodes_collection);

    btn_array.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (!confirm('Are you sure you want to delete it?')) {
                e.preventDefault(); //Si se da cancelar, se evita el click
            }
        });
    });
}
