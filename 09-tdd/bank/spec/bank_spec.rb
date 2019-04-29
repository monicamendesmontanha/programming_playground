require_relative '../bank'

describe Bank do
  describe '.new' do
    it 'create a new bank object' do
      bank = Bank.new
      expect(bank).to_not be nil
    end
  end
end