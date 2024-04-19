fetch('https://run.mocky.io/v3/501df8df-1d03-4ab6-b865-ece3ba04be2d')
  .then(response => {
    console.log(response); // In ra đối tượng response để kiểm tra
    return response.json(); // Giải mã dữ liệu JSON từ phản hồi
  })
  .then(data => {
    console.log(data); // In ra dữ liệu đã được giải mã từ API
  })
  .catch(error => {
    console.error('Đã xảy ra lỗi khi lấy dữ liệu từ API:', error);
  });