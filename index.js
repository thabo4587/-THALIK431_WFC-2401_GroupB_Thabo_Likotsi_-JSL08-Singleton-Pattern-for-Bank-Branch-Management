// 1. Variable to store the singleton instance (initially set to null)
let bankBranchInstance = null;

// 2. BankBranch Class representing bank branch information
class BankBranch {
  constructor(branchInfo) {
    // 3. Check if an instance of the BankBranch class already exists
    if (bankBranchInstance === null) {
      // If no instance exists, create a new one with the provided branchInfo
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }

    // Return the existing instance (either newly created or the one already in bankBranchInstance)
    return bankBranchInstance;
  }

  // 4. Example method to access the branch information stored in the singleton instance
  getBranchInfo() {
    return this.branchInfo;
  }
}

// 5. Usage section to demonstrate the Singleton pattern

// Create branch instances (they will both refer to the same instance)
const branchA = new BankBranch({ address: "1 Main St", city: "Anytown" });
const branchB = new BankBranch({ address: "Another Address" }); // This won't create a new instance

// Verify that both branchA and branchB point to the same object using strict equality
console.log(branchA === branchB); // This will be true

// Access branch information from any instance (they both point to the same object)
console.log(branchA.getBranchInfo()); // Output: { address: "1 Main St", city: "Anytown" }
