export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          results: [
            "test.pdf",
            "dummy.txt",
            "kenny.txt",
            "jack.text",
            "julien.pdf",
          ],
        },
      ],
    })
  ),
};
