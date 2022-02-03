const rules = {
    nama_alamat: {
        required: {value: true, message: 'Nama alamat harus di isi'},
        maxLength: {value: 500, message: 'Panjang nama alamat maksimal 500 karakter'},
        minLength: {value: 5, message: 'Panjang nama alamat minimal 5 karakter'}
    },
    provinsi: {
        required: {value: true, message: 'Provinsi harus di pilih'}
    },
    kabupaten: {
        required: {value: true, message: 'Kabupaten harus di pilih'}
    },
    kecamatan: {
        required: {value: true, message: 'Kecamatan harus di pilih'}
    },
    kelurahan: {
        required: {value: true, message: 'Kelurahan harus di pilih'}
    },
    detail_alamat: {
        required: {value: true, message: 'Detail alamat harus di isi'},
        maxLength: {value: 500, message: 'Panjang detail alamat maksimal 500 karakter'},
    },
}

export {rules};