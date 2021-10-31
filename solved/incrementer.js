function incrementer(nums) {
  for (let i = 0; i < nums.length; i++) {

    if (nums.length === 0) {
    }

    else if ((nums[i] + (i + 1)) >= 10) {
      nums[i] = nums[i] + (i + 1);
      nums[i] = nums[i] % 10;
    }
    
    else {
      nums[i] = nums[i] + (i + 1);
    }

  }
  console.log(nums);
  return nums;
}

// incrementer([]);
incrementer([1, 3, 4, 5, 11]);
