const memberObjectDto = (dataParam) => {
  const response = {
    code: dataParam?.code || '',
    name: dataParam?.name || '',
  };

  return response;
};

const memberArrayDto = (arrayParam) => {
  const response = arrayParam.map((o) => {
    const data = {
      code: o.code || '',
      name: o.name,
    };

    return data;
  });

  return response;
};

module.exports = {
  memberObjectDto,
  memberArrayDto,
};
