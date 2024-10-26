
export const getUserById = (c: any) => {
  const { id } = c.req.valid('param');
  return c.json(
    {
      id: id.toString(),
      age: 20,
      name: 'Ultra-man',
    },
    200
  );
}

export const getUsers = (c: any) => {
  return c.json(
    [
      {
        id: '1',
        age: 20,
        name: 'Ultra-man',
      },
      {
        id: '2',
        age: 20,
        name: 'name'
      }
    ],
    200
  );
}