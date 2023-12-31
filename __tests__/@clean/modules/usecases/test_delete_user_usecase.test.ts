import { DeleteUserUsecase } from "../../../../src/@clean/modules/user/usecases/delete_user_usecase";
import { User } from "../../../../src/@clean/shared/domain/entities/user";
import { UserRepositoryMock } from "../../../../src/@clean/shared/infra/repositories/user_repository_mock";

test('Test delete user usecase', async () => {
    const repo = new UserRepositoryMock()
    const usecase = new DeleteUserUsecase(repo)
    const user = await usecase.execute(1)
    expect(user).toBeInstanceOf(User)
});