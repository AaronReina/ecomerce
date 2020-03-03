export default (data, option, info) => {
  switch (option) {
    case "oldFirst":
      data.sort((a, b) => a.year - b.year);

      return data;

    case "oldLast":
      data.sort((b, a) => a.year - b.year);
      return data;

    case "cheapFirst":
      data.sort((a, b) => a.price - b.price);

      return data;

    case "cheapLast":
      data.sort((b, a) => a.price - b.price);

      return data;

    case "category":
      const finalData = data.filter(e =>
        e.category.toUpperCase().includes(info.toUpperCase())
      );
      return finalData;
    case "delete":
      const position = data.findIndex(e => {
        return e._id === info;
      });

      data.splice(position, 1);
      console.log(data);
      return data;
    default:
      return data;
  }
};
